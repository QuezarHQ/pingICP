use std::collections::HashMap;
use lazy_static::lazy_static;
use std::sync::{Arc, Mutex};
use serde::{Serialize, Deserialize};
use serde_json;

#[derive(Serialize, Deserialize)]
struct Publisher {
    id: String,
    name: String,
    description: String,
    messages: Vec<Message>,
    subscribers: Vec<String>
}

#[derive(Serialize, Deserialize)]
struct Subscriber {
    id: String,
    name: String,
    subscriptions: Vec<String>,
    messages: Vec<Message>
}

#[derive(Serialize, Deserialize, Clone)]
struct Message {
    publisher: String, 
    content: String
}

#[derive(Serialize, Deserialize)]
struct App {
    publishers: HashMap<String, Publisher>,
    subscribers: HashMap<String, Subscriber>
}

impl App {
    
    fn new() -> Self {
        App {
            publishers: HashMap::new(),
            subscribers: HashMap::new()
        }
    }
    
    fn is_publisher(&self, id: String) -> bool {
        self.publishers.contains_key(&id)
    }
    
    fn add_publisher(&mut self, id: String, name: String, description: String) {
        let publisher = Publisher {
            id: id.clone(), 
            name: name.clone(),
            description: description.clone(), 
            messages: Vec::new(),
            subscribers: Vec::new()
        };
        self.publishers.insert(id, publisher);
    }

    fn remove_publisher(&mut self, id: String) {
        self.publishers.remove(&id);
    }

    fn get_publishers(&self) -> String {
        return serde_json::to_string(&self.publishers).unwrap();
    }
    
    fn get_publisher(&self, id: String) -> String {
        let publisher = self.publishers.get(&id);
        return serde_json::to_string(&publisher).unwrap();
    }

    fn is_subscriber(&self, id: String) -> bool {
        self.subscribers.contains_key(&id)
    }
    
    fn add_subscriber(&mut self, id: String, name: String) {
        let subscriber = Subscriber {
            id: id.clone(), 
            name: name.clone(),
            messages: Vec::new(),
            subscriptions: Vec::new()
        };
        self.subscribers.insert(id, subscriber);
    }

    fn remove_subscriber(&mut self, id: String) {
        self.subscribers.remove(&id);
    }

    fn get_subscribers(&self) -> String {
        return serde_json::to_string(&self.subscribers).unwrap();
    }
    
    fn get_subscriber(&self, id: String) -> String {
        let subscriber = self.subscribers.get(&id);
        return serde_json::to_string(&subscriber).unwrap();
    } 

    fn subscribe(&mut self, pub_id: String, sub_id: String) {
        if let Some(publisher) = self.publishers.get_mut(&pub_id) {
            publisher.subscribers.push(sub_id.clone());
        }
        if let Some(subscriber) = self.subscribers.get_mut(&sub_id) {
            subscriber.subscriptions.push(pub_id.clone());
        }
    }  

    fn publish(&mut self, pub_id: String, content: String) {
        let message = Message {
            publisher: pub_id.clone(),
            content: content.clone(),
        };
        if let Some(publisher) = self.publishers.get_mut(&pub_id) {
            publisher.messages.push(message.clone());
            for sub_id in publisher.subscribers.iter() {
                if let Some(subscriber) = self.subscribers.get_mut(sub_id) {
                    subscriber.messages.push(message.clone());
                } 
            }
        }

    }
    
}

lazy_static! {
    static ref APP: Arc<Mutex<App>> = Arc::new(Mutex::new(App::new()));
}

#[ic_cdk::query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

#[ic_cdk::query]
fn is_publisher(id: String) -> bool {
    let app = APP.lock().unwrap();
    return app.is_publisher(id)
}

#[ic_cdk::update]
fn add_publisher(id: String, name: String, description: String) -> () {
    let mut app = APP.lock().unwrap();
    return app.add_publisher(id, name, description)
}

#[ic_cdk::update]
fn remove_publisher(id: String) -> () {
    let mut app = APP.lock().unwrap();
    return app.remove_publisher(id)
}

#[ic_cdk::query]
fn get_publishers() -> String {
    let app = APP.lock().unwrap();
    return app.get_publishers()
}

#[ic_cdk::query]
fn get_publisher(id: String) -> String {
    let app = APP.lock().unwrap();
    return app.get_publisher(id)
}

#[ic_cdk::query]
fn is_subscriber(id: String) -> bool {
    let app = APP.lock().unwrap();
    return app.is_subscriber(id)
}

#[ic_cdk::update]
fn add_subscriber(id: String, name: String) -> () {
    let mut app = APP.lock().unwrap();
    return app.add_subscriber(id, name)
}

#[ic_cdk::update]
fn remove_subscriber(id: String) -> () {
    let mut app = APP.lock().unwrap();
    return app.remove_subscriber(id)
}

#[ic_cdk::query]
fn get_subscribers() -> String {
    let app = APP.lock().unwrap();
    return app.get_subscribers()
}

#[ic_cdk::query]
fn get_subscriber(id: String) -> String {
    let app = APP.lock().unwrap();
    return app.get_subscriber(id)
}

#[ic_cdk::update]
fn subscribe(pub_id: String, sub_id: String) {
    let mut app = APP.lock().unwrap();
    return app.subscribe(pub_id, sub_id)
}

#[ic_cdk::update]
fn publish(pub_id: String, content: String) {
    let mut app = APP.lock().unwrap();
    return app.publish(pub_id, content)
}
