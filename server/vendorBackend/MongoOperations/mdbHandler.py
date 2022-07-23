from pymongo import MongoClient
from werkzeug.security import check_password_hash,generate_password_hash

client = MongoClient('mongodb+srv://sihadmin:sihadmin@sih.2oqaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


def verify_admin_login(uname, pwd):
    database = client.get_database(name="users")
    doc = database.get_collection(name="vendorBackend_admin")
    result = doc.find({"username": {"$eq": uname}})
    data = None
    for i in result:
        data = i
    # if data is not None:
    #     if check_password_hash(data['password'],pwd):
    #         return True
    #     else : return False
    return data is not None


# for test
if __name__ == "__main__":
    print(verify_admin_login("admin_bhopal", "admin@bpl"))
