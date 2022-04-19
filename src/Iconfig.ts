import { Filter } from "@mithyateam/mongoqueryresolver";

export interface IIndexSettings {
  settings: Object;
  mappings: {
    doc: {
      properties: any;
    };
  };
}

export default interface IConfig {
  indexName: string;
  model: string;
  batchSize?: number;
  batchInterval?: number;
  indexOnStart?: boolean;
  updateSettingsOnStart: boolean;
  updateMappingsOnStart?: boolean;
  forceIndexOnStart?: boolean;
  forceDeleteOnStart?: boolean;
  dbQuery: Filter;
  indexSettings: IIndexSettings;
}
