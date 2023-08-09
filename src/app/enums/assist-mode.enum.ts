export enum logTypes {
  info,
  error,
  exception,
  warning,
}

export enum hubApiPaths {
  signalRHub = 'esign/api/signatureHub',
  responseUpload = 'esign/api/response',
  tokenRequest = 'esign/api/connection/validate',
  pingRequest = 'esign/api/signPdfForm/push',
}

export enum userKeys {
  officeId = 'HRB-BLOCK-OFFICE-ID',
  spouseSignKey = 'HRB-ESIGN-SP-KEY',
  taxpayerSignKey = 'HRB-ESIGN-TP-KEY',
  accessToken = 'HRB-ESIGN-ACCESS-TOKEN',
  workstationId = 'HRB-BLOCK-WORKSTATION-ID',
  accessTokenExpiry = 'HRB-ESIGN-ACCESS-TOKEN-EXPIRY',
}

export enum eSignModes {
  none = 'none',
  office = 'office',
  signPad = 'signPad',
  consumer = 'consumer',
  ping = 'ping',
}

export enum taxOfficeUiRoutes {
  home = 'home',
  ePin = 'e-pin',
  pairing = 'pairing',
  eSignature = 'e-signature',
  root = '/',
}
export enum customInputs {
  select,
  textBox,
  checkBox,
  autoComplete,
}

export enum zIndexValues {
  mainSnackbar = 5250,
  unpairDialog = 5200,
  languageList = 5150,
  header = 5100,
  suspendDialog = 5050,
  normal = 5000,
  formDialog = 4950,
  formSnackbar = 4900,
  formButtons = 4850,
  language = 6000,
  signature = 5000,
}
export enum dialogTypes {
  consent = 'consent',
  message = 'message',
}
export enum dialogNames {
  end = 'end',
  sign = 'sign',
  cancel = 'cancel',
  suspend = 'suspend',
  decline = 'decline',
  consent = 'consent',
  qrScanner = 'qrScanner',
  unpair = 'unpair',
}
export enum consentDialogResponse {
  approve = '1',
  decline = '0',
}
export enum authTokenStates {
  invalid = 'Token invalid',
}
export enum hubResponseCodes {
  success = 0,
  unauthorized = 401,
}
export enum sessionTypes {
  end = 'END',
  lock = 'LOCK',
  apply = 'APPLY',
  begin = 'BEGIN',
  ePin = 'e-pin',
  cancel = 'CANCEL',
  release = 'RELEASE',
  eSign = 'e-signature',
  eSignPhysical = 'PHYSICAL',
  eSignPdf = 'e-signature-pdf',
}

export enum eventTypes {
  ePin = 'EPIN',
  eSign = 'SIGN',
  eSignPdf = 'SIGNPDF',
}
export enum signalRMessageTypes {
  error = 'failure',
  success = 'success',
  processing = 'processing',
  pairingComplete = 'pairingComplete',
}
export enum signalRStates {
  Connected = 'Connected',
  Connecting = 'Connecting',
  Reconnecting = 'Reconnecting',
  Disconnected = 'Disconnected',
}
export enum hubMethods {
  sendSignature = 'SendSignature',
  removeConnection = 'RemoveConnection',
  sendMessage = 'sendMessage',
}

export enum hubCallbacks {
  receiveMessage = 'receiveMessage',
}

export enum receiveMessage {
  receivePing = 'ReceivePing',
  receiveForm = 'ReceiveForm',
  receiveSignature = 'ReceiveSignature',
  receiveApplySignature = 'ReceiveApplySignature',
  receiveCancelEndSession = 'ReceiveCancelEndSession',
  receiveValidation = 'ReceiveValidation',
  receiveLockReleaseSession = 'ReceiveLockReleaseSession',
  receiveResponse = 'ReceiveResponse',
  receiveSignResponse = 'ReceiveSignResponse',
  receiveCancel = 'ReceiveCancel',
  receiveLock = 'ReceiveLock',
  receiveRelease = 'ReceiveRelease',
  receiveEnd = 'ReceiveEnd',
  receivePin = 'ReceivePin',
  receiveEPinResponse = 'ReceiveEPinResponse',
}

export enum general {
  pair = 'Pair',
  unpair = 'Unpair',
}

export enum FieldType {
  sign = 'sign',
}
export enum consumerEvents {
  initialized = 'initialized',
  error = 'error',
  pingSuccess = 'pingSuccess',
  eSignSuccess = 'eSignSuccess',
  eSignDeclined = 'eSignDeclined',
  cancelResponse = 'cancelResponse',
  lockResponse = 'lockResponse',
  releaseResponse = 'releaseResponse',
  endResponse = 'endResponse',
  ePinSuccess = 'ePinSuccess',
  ePinCancel = 'ePinCancel',
}

export enum ResponseSubmitStatus {
  success,
  failure,
  processing,
}

export enum sessionType {
  cancel = 'CANCEL',
  lock = 'LOCK',
  release = 'RELEASE',
  ping = 'PING',
  end = 'END',
  epin = 'EPIN',
}

export enum logEventType {
  documentLoadTime = 'DocumentLoadTime',
  spanishButtonClick = 'SpanishButtonClick',
  unpair = 'Unpair',
  documentReceived = 'DocumentReceived',
  exception = 'Exception',
  documentType = 'DocumentType',
}
export enum pdfViewerType {
  ng2 = 'Ng2',
  pdfjs = 'pdfjs',
}
