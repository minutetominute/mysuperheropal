#require 'elasticsearch/model'

class Food < ActiveRecord::Base
#	include Elasticsearch::Model
#	include Elasticsearch::Model::Callbacks
	has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>"}, :default_url => "missing.svg"
	validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
	
end
