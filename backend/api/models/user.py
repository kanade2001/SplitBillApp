from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
import bcrypt

class UserManager(BaseUserManager):
  def create_user(self, email, username, password=None):
    if not email:
      raise ValueError('Users must have an email address')
    if not username:
      raise ValueError('Users must have a username')
    if not password:
      raise ValueError('Users must have a password')

    user = self.model(
      email=self.normalize_email(email),
      username=username,
    )

    user.set_password(password)
    user.save(using=self._db)
    return user
  
  def create_superuser(self, email, username, password=None):
    user = self.create_user(
      email=self.normalize_email(email),
      username=username,
      password=password,
    )
    user.is_admin = True
    user.save(using=self._db)
    return user

class User(AbstractBaseUser):
  email = models.EmailField(verbose_name='email', max_length=255, unique=True)
  username = models.CharField(max_length=255, unique=True)
  password_hash = models.CharField(max_length=255)
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  
  objects = UserManager()
  
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS= ['username']
  
  def set_password(self, password):
    salt = bcrypt.gensalt()
    self.password_hash = bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')
  
  def check_password(self, password):
    return bcrypt.checkpw(password.encode('utf-8'), self.password_hash.encode('utf-8'))
  
  def __str__(self):
    return self.email
  
  @property
  def is_staff(self):
    return self.is_admin