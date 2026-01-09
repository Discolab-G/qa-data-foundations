## Cart miscalculation 

# Type 
bug

# Priority 
High

# Severity
Major

# Environment
- Application Web e-commerce platform : Private Sport shop
- Environment : Production
- Browser : Chrome Version 143.0.7499.193 (Build officiel) (64 bits)
- OS : Windows 11 professional, version 24H2
- Device : Desktop

# Description
While multiple different products are added to cart with different quantities, and then reduced in quantity to 0 in the cart, the first product of the list appear in quantity 0. The product appearing in quantity 0 is still added to the cart amount. 

# Steps to reproduce
1 : Select any product
2 : Add it multiple times to the cart
3 : Selct another product in suggestions
4 : Add it multiple times to the cart 
5 : reproduce step 3 and 4 mutiple times ( 3 - 4 times). 
6 : Go to cart
7 : Reduce the quantity of one of the product to 0
8 : Reduce another product quantity to 0 in the cart


# Expected result
The product disapear from the cart, the number of product in the cart reduced, the paiement ammount deducted. 

# Actual result
One of the product stay in the cart, with a quantity of 0. The cart amount isn't deduced. The cart product quantity isn't deduced. 

# Reproducability
2 / 3 

# Impact 
- Users may unintentionally purchase more items than intended
- Can cause frustration and cart abandonment
- Potential financial and customer support impact
- Wrong billing amount

# Attachment 
- Screenshot showing miscalculated cart 
![Cart miscalculation](../attachments/PSS-cart.png)

# Note / Additional information
