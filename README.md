# Firebase Nested Object Update Bug

This repository demonstrates an uncommon bug in Firebase when updating documents with nested objects.  When a nested object contains a key that also exists in the parent object, the nested object's value overwrites the parent's value instead of merging. This can lead to data loss and unexpected application behavior.

## Bug Description
The issue arises when using `db.collection().doc().update()` with a nested object that shares keys with its parent. The nested object's keys take precedence, overwriting the parent's values.  This behavior is counterintuitive and might not be immediately apparent.

## Solution
The solution involves restructuring the update operation to avoid key conflicts. Instead of using a nested object with overlapping keys, use separate update operations or restructure your data model to eliminate the key conflict.