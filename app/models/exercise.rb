class Exercise < ActiveRecord::Base
	has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>"}, :default_url => "missing.svg"
	validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

	# include PgSearch
	# multisearchable against: [:name]
end
