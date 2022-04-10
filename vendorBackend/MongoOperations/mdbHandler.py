from pymongo import MongoClient

client = MongoClient('mongodb+srv://sihadmin:sih123@sih.2oqaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


def verify_admin_login(uname, pwd):
    database = client.get_database(name="users")
    doc = database.get_collection(name="vendorBackend_admin")
    result = doc.find({"username": {"$eq": uname}, "password": pwd})
    data = None
    for i in result:
        data = i
    print(data)
    return data is not None


# for test
if __name__ == "__main__":
    print(verify_admin_login("admin_bhopal", "admin@bpl"))
