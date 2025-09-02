package net.ideahut.springboot.template.entity.app;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import net.ideahut.springboot.annotation.Audit;
import net.ideahut.springboot.entity.EntityAudit;

@Audit
@Entity
@Table(name = "integer_id_with_bytes")
@Setter
@Getter
@SuppressWarnings("serial")
public class IntegerIdWithBytes extends EntityAudit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "name", nullable = false, length = 128)
	private String name;
	
	@Column(name = "bytes")
	private byte[] bytes;
	
	@Setter(AccessLevel.NONE)
	@Transient
	private String data;
	
	public void setData(String data) {
		this.data = data;
		this.bytes = data != null ? data.getBytes() : null;
	}
	
	public IntegerIdWithBytes() {}
	
	public IntegerIdWithBytes(Integer id) {
		this.id = id;
	}
	
}
