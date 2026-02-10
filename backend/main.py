from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def status_check():
    return {"status": "ok"}
