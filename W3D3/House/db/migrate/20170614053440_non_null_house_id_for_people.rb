class NonNullHouseIdForPeople < ActiveRecord::Migration[5.0]
  def change
    change_column :people, :house_id, :integer, null: false
  end
end
