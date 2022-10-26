import {ApiResponse} from './api-response';

// responses
export class ResponsePozo extends ApiResponse {
  data: boolean;

  constructor(data: boolean) {
    super(data);
  }
}
