json.extract! @user, :id, :superhero_name, :email
json.avatar asset_path(@user.avatar.url)
