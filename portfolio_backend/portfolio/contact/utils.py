import threading

from django.core.mail import send_mail
from django.template.loader import render_to_string

from config.settings import HOST_EMAIL


class EmailThread(threading.Thread):
    def __init__(self, info, recipient_list):
        self.recipient_list = recipient_list
        self.info = info
        threading.Thread.__init__(self)

    def run(self):
        html_template = 'contact/base.html'
        html_message = render_to_string(html_template, context={
            "name": self.info.get('name'),
            "message": self.info.get('message'),
            "email": self.info.get('email'),
            "location": self.info.get('location'),
            "budget": self.info.get('budget')
        })
        send_mail(self.info.get('subject'), self.info.get('message'), HOST_EMAIL, self.recipient_list,
                  html_message=html_message)


def send_email(info, recipient_list):
    EmailThread(info, recipient_list).start()
