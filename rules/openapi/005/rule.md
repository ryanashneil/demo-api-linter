`INTEROP-005`

## Specifying API Time Limits

_Severity: **WARN**_

### Description

This rule recommends informing API users of the API backend processing time and API timeout value. The backend processing time must always be less than the timeout value. Timeout values of typical API Gateways/load balancers such as AWS API Gateway are at 29 seconds while APEX is at 30 seconds.  The error 504 is defined for API Timeout at the load balancer or API Gateway when the backend server does not provide a response within the above timing.

### Why this rule is important

- **Compliance**: Following this rule ensures compliance with OWASP, prevent the backend server from resource overload.

### How to apply this rule

1. OpenAPI Specification:
   This rule is applied at the path level.

2. Validation:
   The rule checks each endpoint path to check the inclusion of the error of 504 in the response to account for API timeout.

### Example of a valid responses configuration

```yaml
servers:
paths:
  /users:
    get:
      summary: "Retrieve a list of users"
      responses:
        "504":
          description: "Server Timeout."
```

### Example of an invalid responses configuration

```yaml
paths:
  /users:
    get:
      summary: "Retrieve a list of users"
      responses:
        "200":
          description: "A list of users."
        "404":
          description: "Not Found."
        # Missing required responses such as 504.
```

### Error Message

If the rule detects missing required response, it will generate an error message as follows:

- "Missing response code: 504."

### Conclusion

Adhering to this rule ensures that your API backend is protected from resource overload. If additionally the API response time is measured and provided to the user, the User can also design his application and user experience around the expected API Response Time.
