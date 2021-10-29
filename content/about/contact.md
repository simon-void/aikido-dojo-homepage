---
title: "Kontakt"
date: 2019-10-14T21:51:26+01:00
draft: false
---

<form class="mb-5" id="contact-form">
  <div class="form-group">
    <label for="senderEmailId" style="width: 400px">Email-Adresse</label>
    <input type="email" class="form-control" id="senderEmailId" placeholder="name@beispiel.de" name="senderEmail">
    <small id="emailHelp" class="form-text text-muted">Wir werden diese Email-Adresse nicht an andere weitergeben.</small>
  </div>

  <div class="form-group">
    <label for="subjectId" data-width="50%">Betreff</label>
    <input type="text" class="form-control" id="subjectId" placeholder="Thema" name="subject">
  </div>

  <div class="form-group">
    <label for="messageId">Nachricht</label>
    <textarea class="form-control" id="messageId" rows="8" name="message"></textarea>
  </div>

  <input type="hidden" name="receiverName" value="dojo">

  <span id="contactAlertParent"></span>

  <button type="submit" id="contactButtonId" class="btn btn-primary">Absenden</button>
</form>

<div class="alert alert-info alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
</div>

