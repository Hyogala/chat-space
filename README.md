# DB設計



## members table

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| user_id  | references | null: false, foreign_key: true |
| group_id | references | null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user

## groups table

| Column     | Type    | Options                        |
| ---------- | ------- | ------------------------------ |
| name  | string | null: false |

### Association
- has_many :members
- has_many :users, through: :members
- has_many :messages

## users table

| Column     | Type    | Options                        |
| ---------- | ------- | ------------------------------ |
| name  | string | null: false |

### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages

## messages table

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| body     | Text    |                                |
| image    | string  |                                |
| group_id | references | null: false, foreign_key: true |
| user_id  | references | null: false, foreign_key: true |

### Association
- belongs_to: user
- belongs_to: group


