// @flow

let nextScopeId: number = 1;

class OpenObject<O> {
  state_: Map<string, mixed>;

  constructor() {
    this.state_ = new Map();
  }

  static Field: typeof Field;

  static field<T>(initializer: (object: OpenObject<O>) => T): Field<O, T> {
    return new Field("ref" + nextScopeId++, initializer);
  }

  get<T>(field: Field<O, T>): T {
    const anyState: any = this.state_.get(field.key_);
    let state = (anyState: ?T);
    if (state == null) {
      state = field.initializer_(this);
      this.state_.set(field.key_, state);
    }

    return state;
  }

  set<T>(field: Field<O, T>, value: T): void {
    this.state_.set(field.key_, value);
  }

  has(field: Field<O, *>): boolean {
    return this.state_.has(field.key_);
  }
}

module.exports = OpenObject;

class Field<O, T> {
  key_: string;
  initializer_: (object: OpenObject<O>) => T;

  constructor(key: string, initializer: (object: OpenObject<O>) => T) {
    this.key_ = key;
    this.initializer_ = initializer;
  }
}

OpenObject.Field = Field;
