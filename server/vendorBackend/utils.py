import random as r
import string
from .models import admin

def create_random_token(size):
    str = ""
    return str.join(r.choices(string.ascii_letters + string.digits, k=size))

def check_user_existance(uid):
    admin_querey = admin.objects.get(admin_id=uid)
    print(admin_querey.admin_id)



if __name__ == '__main__':
    check_user_existance("dbjPm4b7zYWhX95")