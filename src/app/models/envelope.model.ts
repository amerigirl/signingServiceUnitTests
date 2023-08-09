import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
//import { Signer } from "crypto";
import { SigningTypes } from './enums';

export interface Envelope {
  envelopeId?: number;
  envelopeKey?: string;
  appId?: string;
  envelopeStatus?: string;
  dateTimeOffset?: string;
  signedTime?: string;
  signers?: {
    envelopeSignerId?: number;
    clientUserId?: number;
    fName?: string;
    lName?: string;
    email?: string;
    phone?: string;
    signOrder?: number;
    signerKey?: string;
  }[];
  signer?: {
    envelopeSignerId?: number;
    clientUserId?: number;
    fName?: string;
    lName?: string;
    email?: string;
    phone?: string;
    signOrder?: number;
    signerKey?: string;
  };
  documentKeys?: string[];
  documents?: Document[];
  docInfo?: any[];
}

export interface Document {
  documentKey?: string;
  documentName?: string;
  extension?: string;
  content?: string;
  pages?: Page[];
  expiry?: string;
  signedTime?: string;
  totalSigned?: number;
  checksum?: string;
}

export interface Page {
  pageNo?: number;
  pageStyle?: {
    width?: number;
    height?: number;
    css?: any;
  };
  pageFields?: PageField[];
}

export interface PageField {
  fieldStyle?: any;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  fieldType?: string;
  signOrder?: number;
  groupId?: number;
  fieldNo?: number;
  fieldId?: string;
  fieldValue?: string;
  docPageDetailId?: number;
  css?: any;
  markerCss?: any;
  showConsentInput?: boolean;
}

export interface GetEnvelope {
  sessionKey?: string;
}

export interface GetDocument {
  DocumentKey?: string;
  sessionKey?: string;
}

export interface SignDocument {
  SessionKeys: string;

  signedTime: string;

  documents: string[];

  signingMethod: SigningTypes;

  Key: string;

  files: any;

  NameValue: string;
}

export interface NativeSignDocument {
  SessionKeys: string;

  signedTime: string;

  documents: string;

  signingMethod: SigningTypes;

  Key: string;

  NameValue: string;

  SignValue: string;
}

export class SignData {
  signatureCreated: boolean;
  firstName: string;
  lastName: string;
  signFieldId: number;
  signModalData: any;
  signPoints?: any[];
  field: pageField;
  signedTime: string;
  consentName: string;
}
export type Nullable<T> = T | null;

export interface AssistModeData {
  businessMetaData: businessMetaData;
  eSignMode: string;
  pdfMetaData: pdfMetaData[];
  signedPdfForms: any[];
}

export interface businessMetaData {
  officeInfo: officeInfo;
  sessionInfo: sessionInfo;
}

export interface officeInfo {
  officeId: string;
  workstationId: string;
}

export interface sessionInfo {
  applicationName: string;
  ePin: string;
  isSessionDeclined: boolean;
  returnId: string;
  returnYear: string;
  signEvent: string;
  signSession: string;
  signedPdfFileRequired: boolean;
  pdfMetaData: pdfMetaData[];
  viewMode?: boolean;
}

export interface pdfMetaData {
  fileName: string;
  fileUrlOrData: string;
  formName: string;
  language: string;
  pageMetaData: pageMetaData[];
}

export interface pageMetaData {
  pageStyle: { width: number; height: number };
  pageFields: pageField[];
}

export interface pageField {
  dateFieldId: string;
  fieldId: string;
  fieldStyle: { top: number; left: number; width: number; height: number };
  fieldType: string;
  fieldValue: string;
  group_id: number;
  sign_order_no: number;
  signerName: string;
  fieldCss: { top: string; left: string; width: string; height: string };
}
