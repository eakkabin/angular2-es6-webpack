export class Thread {
  constructor(id, name, avatarSrc) {
    this.id = id || uuid();
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}
