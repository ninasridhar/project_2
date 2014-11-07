require "spec_helper"

describe Photo do 
  describe "relations" do
    it{should belong_to(:user)}
    it{should belong_to(:category)}
    it{should belong_to(:location)}
    it{should have_many(:votes)}
    it{should have_many(:comments)}
    it{should have_and_belong_to_many(:tags)}
    it{should have_and_belong_to_many(:albums)}
  end
end