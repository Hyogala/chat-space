# DB設計



## members table

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

### Association
- has_many :groups
- has_many :users

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
| mail_address | string | null: false |
| password     | string | null: false|

### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages

## messages table

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| body     | Text    |                                |
| image    | string  |                                |
| group_id | integer | null: false, foreign_key: true |
| user_id  | integer | null: false, foreign_key: true |

### Association
- belongs_to: user
- belongs_to: group


