import { ISubscriber } from "./ISubscriber";

export interface IPublisher {
  subscribe(s: ISubscriber);
  unsubscribe(s: ISubscriber);
  notifySubscribers();
}
