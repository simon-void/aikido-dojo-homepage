---
title: "Contact"
date: 2019-10-14T21:51:26+01:00
draft: false
---

<form class="mb-5" id="contact-form">
  <div class="form-group">
    <label for="senderEmailId">Email address</label>
    <input type="email" class="form-control" id="senderEmailId" placeholder="name@example.com" name="senderEmail">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="subjectId">Subject</label>
    <input type="text" class="form-control" id="subjectId" placeholder="Example input" name="subject">
  </div>

  <div class="form-group">
    <label for="messageId">Message</label>
    <textarea class="form-control" id="messageId" rows="8" name="message"></textarea>
  </div>

  <input type="hidden" name="receiverName" value="dojo">

  <span id="contactAlertParent"></span>

  <button type="submit" id="contactButtonId" class="btn btn-primary">Submit</button>
</form>

<div class="alert alert-info alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    Yes, the contact form works. I'll get an email, when you press Send. Please don't spam me!
</div>

