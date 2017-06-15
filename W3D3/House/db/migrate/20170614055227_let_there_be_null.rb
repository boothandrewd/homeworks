class LetThereBeNull < ActiveRecord::Migration[5.0]
  def change
    change_column :people, :house_id, :integer, null: true
    change_column :houses, :address, :text, null: true
  end
end
