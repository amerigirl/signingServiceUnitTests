export class ESFormLanguageModel {
    formName = '';

    formPdfContent = '';

    formPages: ESFormDynamicDataPageModel[] = [];
  }

  export class ESFormDynamicDataPageModel {
    pageNo = 0;
    pageStyle!: ESFormPageStyleModel;
    pageFields: ESFormDynamicDataFieldModel[] = [];
  }
  export class ESFormPageStyleModel {
    width = 0;
    height = 0;
    css: any;
  }

  export class ESFormDynamicDataFieldModel {
    fieldNo = 0;
    fieldId = '';
    fieldValue = '';
    isTpSignField = true;
    isSpSignField = false;
    isTpSignDateField = false;
    isSpSignDateField = false;
    fieldStyle!: ESFormDynamicDataFieldStyleModel;
  }

  export class ESFormDynamicDataFieldStyleModel {
    top = 0;
    left = 0;
    width = 0;
    height = 0;
    css: any;
  }
