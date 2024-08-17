import { DB } from "../assets/db";
import { IBlitz } from "../domains/IBlitz";
import { IWord } from "../domains/IWord";
import { TableType } from "../domains/TableType";
import { shuffleArray } from "../utils/shuffleArray";

interface IGetService {
  get<T>(): Promise<T>;
}

class GetService implements IGetService {
  _service: Service;
  _table: TableType;
  constructor(service: Service, table: TableType) {
    this._service = service;
    this._table = table;
  }
  async get<T>() {
    const data = await this._service.getData<T[]>(this._table);
    shuffleArray(data);
    return data[0];
  }
}

export class Service {
  getData<T>(table: TableType): Promise<T> {
    return new Promise((resolve) => {
      resolve(DB[table] as T);
    });
  }

  _owlService: IGetService;
  _larkService: IGetService;
  _blitzService: IGetService;

  constructor() {
    this._blitzService = new GetService(this, "blitz");
    this._larkService = new GetService(this, "larks");
    this._owlService = new GetService(this, "owls");
  }

  getLark() {
    return this._larkService.get<IWord>();
  }
  getOwl() {
    return this._owlService.get<IWord>();
  }
  getBlitz() {
    return this._blitzService.get<IBlitz>();
  }
}

export const service = new Service();
