# Reversi game client 💻

**IMPORTANT NOTICE**  
_This is at its core a school project for backend development. The deadline is in just a few days, meaning the frontend will have to compromize with some QOL and UX features for the end user._

This is the omniproject for the client.  
The true frontend client will only ever speak to the next-api.  
The next-api will then route requests to the secret backend with an internal authorized application key in the header: `x-internal-auth`.  
The next-api will also send the users bearer token: `Bearer ....`.

We gain some real benefits by doing it this way, as we can now use SSR to display admin options only to users coming back with the role of `admin` for example.

## TODO:

-   Create NextJs `/api/`
-   Force insert a user token and internal auth token into all requests (for testing with Thunder client)

*   Create endpoints for registering a user
*   Create endpoints for logging in a user
*   Create frontend connection for logging in a user

---

CREATE GETTERS:

-   Get users (include queries like search etc - match with game backend queries) -> next -> game
-   Get completed games (optionally include completed game moves in request) -> next -> game
-   Get completed game moves (should more often than not be called without completed game for bandwidth optimization)

---

LIVE SERVICES

-   Get active games -> websocket lobby
