import Vapor

func routes(_ app: Application) throws {
    app.get { req in
        return req.view.render("index")
    }
    
    app.get("projects") { req in
        return req.view.render("projects")
    }
    
    app.get("skills") { req in
        return req.view.render("skills")
    }
    
    app.get("contact") { req in
        return req.view.render("contact")
    }
    
    app.post("submit-contact") { req -> EventLoopFuture<View> in
        struct Contact: Content {
            let name: String
            let email: String
            let message: String
        }
        
        let contact = try req.content.decode(Contact.self)
        
        // Here you would typically save the contact information or send an email
        // For this example, we'll just render a success message
        
        return req.view.render("contact", ["success": true])
    }
}
