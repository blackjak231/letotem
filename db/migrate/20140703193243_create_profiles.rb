class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
    	t.belongs_to :user, index: true
    	t.string :first_name
      t.string :last_name
      t.boolean :gender
      t.date :birthday
      t.string :work
      t.integer :phone
      t.integer :phone_mobile

      t.timestamps
    end
  end
end
