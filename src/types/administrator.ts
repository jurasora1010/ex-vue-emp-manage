export class Administrator {
  /**
   * 管理者情報を表すクラスです.
   * @param _id - ID
   * @param _name - 名前
   * @param _mailAddress - メールアドレス
   * @param _password - パスワード
   */
  constructor(
    private _id: number,
    private _name: string,
    private _mailAddress: string,
    private _password: number
  ) {}
  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get mailAddress(): string {
    return this._mailAddress;
  }

  public set mailAddress(mailAddress: string) {
    this._mailAddress = mailAddress;
  }

  public get password(): number {
    return this._password;
  }

  public set password(password: number) {
    this._password = password;
  }
}
