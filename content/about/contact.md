---
title: "Kontakt"
date: 2019-10-14T21:51:26+01:00
draft: false
---

[//]: # (<div>)

[//]: # (    meine&#40;/Stephans&#41; Telefonnr: <a href="tel:00491795361357">01795361357</a> &#40;auf für Signal/WhatsApp&#41;)

[//]: # (    <br>Alternativ schickt eine Email an <a href="mailto:contact@flux-aikido.com">contact@flux-aikido.com</a> per Emailprogramm)

[//]: # (    <br>oder hiermit:)

[//]: # (</div>)

<ul>
  <li><a href="/about/teachers/">meine</a> Telefonnr: <a href="tel:00491795361357">01795361357</a> (auch für Signal/WhatsApp)</li>
  <li>Email-Adresse: <a href="mailto:contact@flux-aikido.com">contact@flux-aikido.com</a></li>
  <li>Email direkt:</li>
</ul>

<form class="mb-5" id="contact-form">
  <div class="form-group">
    <label for="senderEmailId" style="width: 400px">Deine Email-Adresse</label>
    <input type="email" class="form-control" id="senderEmailId" placeholder="name@beispiel.de" name="senderEmail">
    <small id="emailHelp" class="form-text text-muted">Eine Email-Adresse ist nur nötig, falls du eine Antwort erwartest und wird nicht an andere weitergeben.</small>
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
