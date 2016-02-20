class Article {
  constructor(title = '', link = '', votes = 0) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  voteUp () {
    this.votes += 1;
  }

  voteDown () {
    this.votes -= 1;
  }

  domain () {
    try {
      const link = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}

export {Article}
