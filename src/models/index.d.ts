import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DrinkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Drink {
  readonly id: string;
  readonly Name?: string | null;
  readonly Dedscription?: string | null;
  readonly Star?: number | null;
  readonly Price?: number | null;
  readonly ImageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Drink, DrinkMetaData>);
  static copyOf(source: Drink, mutator: (draft: MutableModel<Drink, DrinkMetaData>) => MutableModel<Drink, DrinkMetaData> | void): Drink;
}

export declare class Home {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}