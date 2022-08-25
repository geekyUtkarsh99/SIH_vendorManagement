import random as r
import string
from math import radians, sin, cos, asin
import numpy as np
import pandas as pd

from .models import admin


def create_random_token(size):
    str = ""
    return str.join(r.choices(string.ascii_letters + string.digits, k=size))


def check_user_existance(uid):
    admin_querey = admin.objects.get(admin_id=uid)
    print(admin_querey.admin_id)


def get_dist(lat1, lon1, lat2, lon2, r):
    # Convert degrees to radians
    coordinates = lat1, lon1, lat2, lon2
    # radians(c) is same as c*pi/180
    phi1, lambda1, phi2, lambda2 = [
        radians(c) for c in coordinates
    ]

    # Apply the haversine formula
    a = (np.square(sin((phi2 - phi1) / 2)) + cos(phi1) * cos(phi2) *
         np.square(sin((lambda2 - lambda1) / 2)))
    d = 2 * r * asin(np.sqrt(a))
    return d


if __name__ == '__main__':
    # check_user_existance("dbjPm4b7zYWhX95")
    lat1 = 26.923420055639127
    lon1 = 75.78535393332078

    lat2 = 22.74880296879072
    lon2 = 75.86551582586831
    print(get_dist(lat1, lon1, lat2, lon2, 6371))
