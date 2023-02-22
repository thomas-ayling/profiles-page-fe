export interface MetadataType {
    name?: string;
    type?: string;
    size?: number;
    crc: number;
  }
  
  export interface HeadersType {
    headers: {
      'Content-Type': string;
      'Access-Control-Allow-Origin': string;
      'Access-Control-Allow-Headers': string;
      'Access-Control-Allow-Credentials': string;
      'Access-Control-Allow-Private-Network': string;
    };
  }
  