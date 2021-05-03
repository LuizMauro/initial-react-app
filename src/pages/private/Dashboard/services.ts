import api from '@http/api';

interface IResponseReqImpressaoLocal {
  boletoURL: string;
}

interface IResponse {
  error: boolean;
  response?: {
    boletoURL: string;
  };
}

class Services {
  public async impressaoLocal(estrategiaAcaoId: string): Promise<IResponse> {
    return await api
      .get<IResponseReqImpressaoLocal>(
        `api/Envio/GetMergedPDF?estrategiaAcaoId=${estrategiaAcaoId}`,
      )
      .then(response => {
        return {
          error: false,
          response: response.data,
        };
      })
      .catch(error => {
        return {
          error: true,
        };
      });
  }
}

export default Services;
