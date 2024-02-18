import requests
import urllib
import jwt

from oauth2client import client

def get_id_token_with_code_method_1(code):
    client_id = '1054192580473-rasl0u08h763a9m5445pku09of3p5umt.apps.googleusercontent.com'
    client_secret = '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'
    redirect_uri = "postmessage"
    token_endpoint = "https://oauth2.googleapis.com/token"
    payload = {
        'code': code,
        'client_id': client_id,
        'client_secret': client_secret,
        'redirect_uri': redirect_uri,
        'grant_type': 'authorization_code',
    }

    body = urllib.parse.urlencode(payload)
    headers = {
        'content-type': 'application/x-www-form-urlencoded',
    }

    response = requests.post(token_endpoint, data=body, headers=headers)
    if response.ok:
        id_token = response.json()['id_token']
        return jwt.decode(id_token, options={"verify_signature": False})
    else:
        print(response.json())
        return None


def get_id_token_with_code_method_2(code):
    CLIENT_SECRET_FILE = 'client_secret.json'

    # Exchange auth code for access token, refresh token, and ID token
    credentials = client.credentials_from_clientsecrets_and_code(
        CLIENT_SECRET_FILE,
        ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', 'openid', 'email', 'profile'],
        code
    )
    
    return credentials.id_token