export interface FormMapping {
    config: {
      userEmail: string;
      userPhone: string;
      pdfSettings: {
        isSignedPdfRequired: boolean;
        isImageBase64: boolean;
        dynamicDataFieldIds: string[];
        dynamicSignFieldIds: string[];
      };
    };
    data: {
      ePin: any;
      formsToSign: {
        formName: string;
        isAccepted: boolean;
        forceSignTp: boolean;
        forceSignSp: boolean;
        applySignTp: boolean;
        applySignSp: boolean;
        isSignAppliedBeforeTp: boolean;
        isSignAppliedBeforeSp: boolean;
        primaryApplicantField: any;
        localizedForms: [];
        localizedPdfForms: {
          formName: string;
          formStoredAbsolutePath: string;
          formLanguage: string;
          formScrollEndPoint: number;
          formPages: {
            pageNo: number;
            pageStyle: {
              width: number;
              height: number;
              css: any;
            };
            pageFields: {
              fieldNo: number;
              fieldId: string;
              fieldValue: string;
  
              fieldStyle: {
                top: number;
                left: number;
                width: number;
                height: number;
                css: any;
              };
            }[];
          }[];
        }[];
      }[];
    };
  }
  