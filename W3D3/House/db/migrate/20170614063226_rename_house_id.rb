class RenameHouseId < ActiveRecord::Migration[5.0]
  def change
    rename_column :people, :house_id, :home_id
  end
end
