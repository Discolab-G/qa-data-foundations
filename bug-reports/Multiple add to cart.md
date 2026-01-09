## Product is added multiple times to cart when clicking "Add to cart" rapidly

# type 
bug

# Priority
High

# Severity
Major

# Environment
- Application Web e-commerce platform
- Environment : Production
- Browser : Chrome Version 143.0.7499.193 (Build officiel) (64 bits)
- OS : Windows 11 professional, version 24H2
- Device : Desktop

# Description
When user clicks multiple times quickly on the "Add to cart" button on the product page, the product is added multiple times to the cart nistead of only once. 
This can lead to incorrect cart quantities and a poor user experience. 

# Steps to reproduce 
1 : Got to any product page
2 : Click rapidly 3-4 times on the "Add to cart" button
3 : Open the cart

# Actual result
The product is added multiple times to the cart (one entry per click).

# Reproducibility
5 / 5

# Impact 
- Users may unintentionally purchase more items than intended
- Can cause frustration and cart abandonment
- Potential financial and customer support impact

# Attachments 
"Screen recording showing the issue"
"Console logs" 

# Note / Additional information
The issue may be related to missing frontend debounce or backend validation preventing duplicate requests. 