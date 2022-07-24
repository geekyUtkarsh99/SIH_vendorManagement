import random as r
import string


def create_random_token(size):
    str = ""
    return str.join(r.choices(string.ascii_letters + string.digits, k=size))
