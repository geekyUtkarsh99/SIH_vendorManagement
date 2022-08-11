from mongoengine.queryset.manager import QuerySetManager
from vendorBackend.models import VendorModel

def vendor_exists(id: str) -> bool:
    """
        return True if vendor exists otherwise False
    """
    vendor = VendorModel.objects(id=id).first()
    if vendor is not None:
        return True
    return False 
