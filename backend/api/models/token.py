from django.conf import settings
from django.db import models

class Token(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    key = models.CharField(max_length=40, primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        if not self.key:
            self.key = self.generate_key()
        return super().save(*args, **kwargs)
    
    def generate_key(self):
        return binascii.hexlify(os.urandom(20)).decode()
    
    class Meta:
        db_table = 'auth_token'