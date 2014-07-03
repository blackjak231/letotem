# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if User.find_by(username: "admin").nil?
    admin = User.new(username: 'admin', email: 'thibaultvaudelin@gmail.com', password: 'letotemadmin', password_confirmation: 'letotemadmin')
    #admin.skip_confirmation!
    #admin.add_role "admin"
    admin.save
end
if User.find_by(username: "thibz").nil?
    user = User.new(username: 'admin', email: 'thibault232@gmail.com', password: 'letotem', password_confirmation: 'letotem')
    #admin.skip_confirmation!
    #admin.add_role "pro"
    user.save
end