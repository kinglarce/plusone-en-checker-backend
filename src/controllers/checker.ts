interface CheckerResponse {
  message: string;
}

export default class CheckerController {
  public async getResponse(): Promise<CheckerResponse> {
    return {
      message: "Test",
    };
  }
}
