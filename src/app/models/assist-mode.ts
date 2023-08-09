/** Please remove the descriptions after noting it down somewhere. They have been added for informational purposes only. */
import { zIndexValues, dialogTypes } from '../enums/assist-mode.enum';
import { pageMetaData } from './envelope.model';
export interface PageStyle {
  width: number;
  height: number;
}

export interface IassistModePdfInput {
  consumerModeData: AppInputModel;
  fileUrlOrData: string | ArrayBuffer;
  formName: string;
  pageMetaData: { pages: PageMetaData[] };
}

export interface PdfMetaData {
  language: string;
  fileUrlOrData: string | ArrayBuffer; // | ArrayBuffer need to integrate the array buffer
  fileName: string;
  formName: string;
  pageMetaData: PageMetaData[];
}
export interface PageMetaData {
  pageStyle: PageStyle;
  pageFields: PageFields[];
}
export interface PageFields {
  fieldId: string;
  signerName: string;
  fieldType: string;
  fieldValue: string;
  fieldFlags: FieldFlags;
  fieldStyle: FieldStyle;
  dateFieldId?: string;
  hasSigned?: boolean;
  groupId?: number;
}
export interface FieldFlags {
  prePopulateData: boolean;
  applySign: boolean;
  captureSign: boolean;
}
export interface FieldStyle {
  top: number;
  left: number;
  width: number;
  height: number;
}
export interface BusinessMetaData {
  officeInfo: OfficeInfo;
  sessionInfo: SessionInfo;
}
export interface SessionInfo {
  returnId: string;
  returnYear: string;
  signEvent: string;
  signSession: string;
  applicationName: string;
  signedPdfFileRequired: boolean;
  isSessionDeclined?: boolean;
  ePin?: string;
}

export interface FormParameters {
  formName: string;
  formDefaultLanguage: string;
}
export interface OfficeInfo {
  officeId: string;
  workstationId: string;
}
export interface AppInputModel {
  eSignMode: string;
  pdfMetaData?: PdfMetaData[];
  businessMetaData?: BusinessMetaData;
}
export interface SignData {
  fieldId?: string;
  fieldValue: string;
  image: string;
}
export class OutputEvent {
  constructor(name: string, value: any) {
    this.name = name;
    this.value = value;
  }
  name: string;
  value: any;
}
export interface OutputResponse {
  eventType: string;
  eventData: any;
}
export interface EventData {
  data: string;
  event: string;
}
export class SignDataModel {
  sign = '';
  showDate = false;
  initial = '';
  placeHolder = 'Tap to sign';
  signScale = '1';
}

export class SignalRMessage {
  event: string;
  data: any;
}
export class SignedPdfForms {
  name: string;
  fileUrl: string;
}
export class AppOutputModel {
  'pdfFieldData': 'Object : Will contain key value pairs of signature data or date info mapped against their respective field Ids';
  'signedPdfFiles': [
    'Will contain an array of signed PDF files (it will usually only have one file but we are using an array to support multiple languages in the future)'
  ];
}

export class ServerResponseModel {
  returnCode = '';
  returnDescription = '';
  returnData = '';
}

export class AccessTokenRequestModel {
  officeId = '';
  workstationId = '';
  isForDevice = true;
}
export class NativeAppMetaModel {
  event = '';
  headerText = '';
  headerTitle = '';
  currentLanguage = '';
  zoomToFit: boolean = null;
  languageList: string[] = [];
}
export class AlertDataModel {
  duration = -1;
  alertMessage = '';
  dismissable = false;
  zIndex = zIndexValues.normal;
}
export class DialogDataModel {
  signRatio = 3;
  dialogName = '';
  autoClose = false;
  fullScreen = false;
  declineText = 'No';
  approveText = 'Yes';
  displayMessage = '';
  dialogData: any = {};
  dialogComponent: any;
  autoCloseDelay = 1500;
  displayTitle = 'Information';
  zIndex = zIndexValues.normal;
  dialogType = dialogTypes.message;
  signPoints: ESignaturePadPointModel[] = [];
}
export class GenericDialogResponseModel {
  dialogName = '';
  dialogData = '';
}
export class ESignaturePadPointModel {
  X;
  Y;
  P;
  time;
  Pressure;
}

export class ESignaturePadInputModel {
  signRatio = 3.0;
  signPoints: ESignaturePadPointModel[] = [];
}

export class ESignaturePadOutputModel {
  signPoints = '';
  signSvg = '';
}

export class CanvasMetaModel {
  width = 0;
  height = 0;
}
export class SignalRStatus {
  responseType = '';
  responseMessage = '';
  connectionStatus = 'NA';
}

export class CropDimensionModel {
  xMin = 0;
  xMax = 0;
  yMin = 0;
  yMax = 0;
}
