import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'add_publisher' : ActorMethod<[string, string, string], undefined>,
  'add_subscriber' : ActorMethod<[string, string], undefined>,
  'get_publisher' : ActorMethod<[string], string>,
  'get_publishers' : ActorMethod<[], string>,
  'get_subscriber' : ActorMethod<[string], string>,
  'get_subscribers' : ActorMethod<[], string>,
  'greet' : ActorMethod<[string], string>,
  'is_publisher' : ActorMethod<[string], boolean>,
  'is_subscriber' : ActorMethod<[string], boolean>,
  'publish' : ActorMethod<[string, string], undefined>,
  'remove_publisher' : ActorMethod<[string], undefined>,
  'remove_subscriber' : ActorMethod<[string], undefined>,
  'subscribe' : ActorMethod<[string, string], undefined>,
}
