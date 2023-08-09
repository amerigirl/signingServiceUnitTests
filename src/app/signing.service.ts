import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  Envelope,
  SignDocument,
  GetEnvelope,
  GetDocument,
  Document,
  Page,
  NativeSignDocument,
} from 'src/app/models/envelope.model';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { ResponseModel } from '../models/response.model';
import { envelopeStatus } from '../models/envelopeStatus.model';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root',
})
export class SigningService {
  responsedata: any;
  errorMessage: string;
  baseUrl: string = '/bsg/signing/api/';
  isNative: boolean;

  constructor(
    private http: HttpClient,
    private appConfigService: AppConfigService
  ) {
    this.appConfigService.appConfigObservable.subscribe((appConfig) => {
      this.baseUrl = appConfig.baseUrl
        ? appConfig.baseUrl + 'bsg/signing/api/'
        : 'bsg/signing/api/';
    });

    this.isNative = localStorage.getItem('isNative') === 'true';
  }

  fetchBlankForm(formName: string): Observable<any> {
    let esignheaders = new HttpHeaders();

    return this.http.get<any>(
      `${this.baseUrl}DocumentSigning/GetFormToSign?formname=${formName}`,
      { headers: esignheaders }
    );
  }

  sendSignature(
    signDocument: SignDocument,
    nativeSignDocument: NativeSignDocument
  ): Observable<any> {
    console.log('sdf', this.isNative);
    let esignheaders = new HttpHeaders().set(
      'bsg-session-key',
      JSON.parse(`${localStorage.getItem('sessionKey')}`)
    );

    const formData = new FormData();
    for (let key in signDocument) {
      formData.append(key, signDocument[key]);
    }
    const apiUrl = this.isNative
      ? `${this.baseUrl}signer/SignatureNative`
      : `${this.baseUrl}signer/Signature`;
    console.log('Api ur', apiUrl);
    return this.http
      .post(apiUrl, this.isNative ? nativeSignDocument : formData, {
        headers: esignheaders,
      })
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      );
  }

  getEnvelopeDetails(EnvelopeID: string): Observable<any> {
    let esignheaders = new HttpHeaders();

    return this.http.get<Envelope>(
      `${this.baseUrl}envelope/GetEnvelope?EnvelopeID=${EnvelopeID}`,
      { headers: esignheaders }
    );
  }

  getEnvelopebySignOrder(getEnvelope: GetEnvelope): Observable<any> {
    let esignheaders = new HttpHeaders().set(
      'bsg-session-key',
      localStorage.getItem('sessionKey')
        ? JSON.parse(`${localStorage.getItem('sessionKey')}`)
        : ''
    );

    let eSignParams = new HttpParams().set(
      'SessionKeys',
      getEnvelope.sessionKey
    );
    return this.http
      .get<Envelope>(`${this.baseUrl}Envelope/GetEnvelope`, {
        headers: esignheaders,
        params: eSignParams,
      })
      .pipe(
        map((resp: any) => {
          let envelope: Envelope = resp.result;
          if (envelope) {
            envelope.signer = { ...envelope?.signers[0] };
            resp.result.documentKeys?.forEach((key) => {
              //TodDo : create a document creator function aand remove console logs
              let document: Document = {
                documentKey: key,
                content: null,
                documentName: null,
                expiry: null,
                extension: null,
                pages: null,
                signedTime: null,
                totalSigned: 0,
              };
              envelope.documents.push(document);
            });
            resp.result = envelope;
          }
          return resp;
        })
      );
  }

  getDocumentByKey(getDocument: GetDocument): Observable<any> {
    let esignheaders = new HttpHeaders().set(
      'bsg-session-key',
      JSON.parse(`${localStorage.getItem('sessionKey')}`)
    );

    let eSignParams = new HttpParams()
      .set('SessionKeys', getDocument.sessionKey)
      .set('documentkey', getDocument.DocumentKey);
    return this.http
      .get<any>(`${this.baseUrl}document/GetDocument`, {
        headers: esignheaders,
        params: eSignParams,
      })
      .pipe(
        map((resp) => {
          let document: Document = {
            ...resp.result,
          };
          let finalPages: Page[] = [];
          let currentPageNo = null; //12
          document.pages?.forEach((page, index) => {
            //12
            if (page.pageNo !== index + 1) {
              // if (currentPageNo !== null) {
              // finalPages . push ({} * page.pageNo - currentPageNo)
              const missingPages = new Array(
                page.pageNo - (currentPageNo == null ? 0 : currentPageNo) - 1
              ).fill(0);
              missingPages.forEach((elem, index) => {
                finalPages.push({
                  pageNo: currentPageNo + index + 1,
                  pageFields: [],
                  pageStyle: { css: null },
                });
              });
              // } else {
              //   finalPages.push({
              //     pageNo: index + 1,
              //     pageFields: [],
              //     pageStyle: { css: null },
              //   });
              // }
            }
            finalPages.push(page);
            currentPageNo = page.pageNo;
          });

          let orderedPages: Page[] = _.orderBy(finalPages, 'pageNo', 'asc');
          return { ...document, pages: orderedPages };
        })
      );
  }
  getSigner(sessionKey: string) {
    // let esignheaders = new HttpHeaders().set(
    //   'bsg-session-key',
    //   JSON.parse(`${localStorage.getItem('sessionKey')}`)
    // );

    return this.http.get<any>(
      `${this.baseUrl}signer/GetSigner?SessionKeys=${sessionKey}`
    );
  }

  getKBAStatus(
    firstName: string,
    lastName: string,
    sessionKey: string,
    transactionId: string
  ) {
    return this.http.get<any>(
      `${this.baseUrl}signer/GetKBAStatus?FirstName=${firstName}&LastName=${lastName}&TransactionId=${sessionKey}&IsKBAAttemptcount=true`
    );
  }

  updateEnvelopeStatus(
    sessionKey: string,
    signingStatus: string,
    cancelReason: string
  ) {
    let payload = {
      signingstatus: signingStatus,
      SessionKeys: sessionKey,
      reason: cancelReason,
    };

    return this.http.post<any>(
      `${this.baseUrl}Envelope/UpdateEnvelopeStatus`,
      payload
    );
  }

  updateSignerAttemptFailed(sessionKey: string) {
    let payload = {
      SessionKeys: sessionKey,
    };

    return this.http.post<any>(
      `${this.baseUrl}signer/UpdateKBAAttemptCount`,
      payload
    );
  }

  getSessionId(sessionKey: string) {
    return this.http.get<any>(
      `${this.baseUrl}signer/GenerateSessionUserIdProof?signSessionKey=${sessionKey}`
    );
  }

  getEnvelopeStatus(
    EnvelopeID: string
  ): Observable<ResponseModel<envelopeStatus[]>> {
    return this.http.get<ResponseModel<envelopeStatus[]>>(
      `${this.baseUrl}envelope/GetEnvelopeStatus?envelopeKey=${EnvelopeID}`
    );
  }
}
