To solve the issue, avoid key conflicts by separating updates or restructuring your data. Here's how:

**Method 1: Separate Updates**

Update the parent and nested fields in separate operations:

```javascript
db.collection('myCollection').doc('myDoc').update({
  fieldName: 'someValue'
});

db.collection('myCollection').doc('myDoc').update({
  'nestedField.fieldName': 'anotherValue'
});
```

**Method 2: Restructure Data**

Rename conflicting keys in your data structure to avoid the conflict:

```javascript
db.collection('myCollection').doc('myDoc').update({
  parentFieldName: 'someValue',
  nestedField: {
    nestedFieldName: 'anotherValue' 
  }
});
```
Choose the method that best suits your data model and application logic.  The separate update approach is generally safer and less prone to further issues.