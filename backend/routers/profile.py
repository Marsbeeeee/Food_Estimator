from fastapi import APIRouter
from backend.schemas.profile import ProfileIn

router = APIRouter(prefix = "/profile", tags = ["profile"])

@router.post("/echo")
def echo_profile(profile: ProfileIn):
    return profile