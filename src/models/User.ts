export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private createdAt: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(value: string): void {
    this.id = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(value: string): void {
    this.email = value;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(value: string): void {
    this.password = value;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public setCreatedAt(value: string): void {
    this.createdAt = value;
  }
}

const user = new User(
  "u003",
  "Astridev",
  "astrodev@devinho",
  "senha12345$",
  "2023-01-30 10:02"
);

const user2 = new User(
  "u004",
  "OutroDev",
  "outrodev@devinho",
  "senha12345$",
  "2023-01-30 10:08"
);

console.log(user2.getId());

user2.setId("u007");

console.log(user2.getId());
